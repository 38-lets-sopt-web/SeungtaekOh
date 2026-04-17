const tableBody = document.querySelector("tbody");
const totalAmountElement = document.querySelector(".total-amount");

function getExpenseData() {
  return JSON.parse(localStorage.getItem("expenseData")) || [];
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
          <td><input type="checkbox" value="${item.id}" /></td>
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
  totalAmountElement.className =
    total > 0 ? "total-amount amount-plus" : "total-amount amount-minus";
}

function init() {
  const allData = getExpenseData();
  renderTable(allData);
}

init();
