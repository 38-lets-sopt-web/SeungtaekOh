const tableBody = document.querySelector("tbody");
const totalAmountElement = document.querySelector(".total-amount");
const titleFilterInput = document.querySelector(".title-filter-input");
const applyButton = document.querySelector(".item5");
const resetButton = document.querySelector(".item6");
const typeFilterSelect = document.querySelector(".type-dropdown");
const categoryFilterSelect = document.querySelector(".category-dropdown");
const paymentFilterSelect = document.querySelector(".payment-dropdown");
const sortFilterSelect = document.querySelector(".sort-dropdown");
const deleteButton = document.querySelector(".btn-delete");
const allCheckbox = document.querySelector(".all-checkbox");

function getExpenseData() {
  return JSON.parse(localStorage.getItem("expenseData")) || [];
}

function filterByType(data, type) {
  if (type === "income") {
    return data.filter((item) => item.amount > 0);
  }
  if (type === "expense") {
    return data.filter((item) => item.amount < 0);
  }
  return data;
}

function filterByCategory(data, categoryValue) {
  if (categoryValue === "all") {
    return data;
  }
  return data.filter((item) => item.category === categoryValue);
}

function filterByPayment(data, paymentValue) {
  if (paymentValue === "all") {
    return data;
  }

  return data.filter((item) => item.payment === paymentValue);
}

function filterByTitle(data, keyword) {
  const trimmedKeyword = keyword.trim().toLowerCase();

  if (!trimmedKeyword) {
    return data;
  }

  return data.filter((item) =>
    item.title.toLowerCase().includes(trimmedKeyword),
  );
}

function sortByDate(data, order) {
  const sortedData = [...data];

  if (order === "asc") {
    sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  if (order === "desc") {
    sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return sortedData;
}

function deleteItem() {
  const data = getExpenseData();
  const rowcheckbox = document.querySelectorAll(".row-checkbox");
  const deleteList = [];
  rowcheckbox.forEach((checkbox) => {
    if (checkbox.checked === true) {
      deleteList.push(Number(checkbox.value));
    }
  });
  const newData = data.filter((item) => !deleteList.includes(item.id));
  localStorage.setItem("expenseData", JSON.stringify(newData));
  allCheckbox.checked = false;
  applyFilters();
}
function allChecked() {
  const rowcheckbox = document.querySelectorAll(".row-checkbox");
  rowcheckbox.forEach((checkbox) => {
    checkbox.checked = allCheckbox.checked;
  });
}

function renderTable(data) {
  if (data.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-message">내역이 없습니다.</td>
      </tr>
    `;
    renderTotalAmount(data);
    return;
  }
  tableBody.innerHTML = data
    .map(
      (item) => `
        <tr>
          <td><input type="checkbox" class="row-checkbox" value="${item.id}" /></td>
          <td>${item.title}</td>
          <td class="${item.amount > 0 ? "amount-plus" : "amount-minus"}">
            ${item.amount > 0 ? "+" : ""}${item.amount.toLocaleString()}
          </td>
          <td>${item.date}</td>
          <td>${item.category}</td>
          <td>${item.payment}</td>
        </tr>
      `,
    )
    .join("");

  renderTotalAmount(data);
}

function renderTotalAmount(data) {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  totalAmountElement.textContent = `${total > 0 ? "+" : ""}${total.toLocaleString()}`;
  if (total > 0) {
    totalAmountElement.className = "total-amount amount-plus";
  } else if (total < 0) {
    totalAmountElement.className = "total-amount amount-minus";
  } else {
    totalAmountElement.className = "total-amount";
  }
}

function applyFilters() {
  const allData = getExpenseData();

  const titleValue = titleFilterInput.value;
  const typeValue = typeFilterSelect.value;
  const categoryValue = categoryFilterSelect.value;
  const paymentValue = paymentFilterSelect.value;
  const sortValue = sortFilterSelect.value;

  let filteredData = allData;

  filteredData = filterByTitle(filteredData, titleValue);
  filteredData = filterByType(filteredData, typeValue);
  filteredData = filterByCategory(filteredData, categoryValue);
  filteredData = filterByPayment(filteredData, paymentValue);
  filteredData = sortByDate(filteredData, sortValue);

  renderTable(filteredData);
}

function resetFilters() {
  titleFilterInput.value = "";
  typeFilterSelect.value = "all";
  categoryFilterSelect.value = "all";
  paymentFilterSelect.value = "all";
  applyFilters();
}

function bindEvents() {
  applyButton.addEventListener("click", applyFilters);
  resetButton.addEventListener("click", resetFilters);
  sortFilterSelect.addEventListener("change", applyFilters);
  deleteButton.addEventListener("click", deleteItem);
  allCheckbox.addEventListener("change", allChecked);
}

function init() {
  bindEvents();
  applyFilters();
}

init();
