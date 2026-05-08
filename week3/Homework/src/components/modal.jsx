import { createPortal } from "react-dom";

const Modal = ({ totalScore, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
        <h2 className="text-2xl font-bold text-black">게임 종료</h2>

        <p className="mt-3 text-sm text-gray-500">
          제한 시간이 모두 끝났습니다.
        </p>

        <div className="mt-6 rounded-2xl bg-section px-6 py-5">
          <p className="text-sm font-medium text-gray-600">최종 점수</p>
          <strong className="mt-2 block text-5xl font-bold text-primary">
            {totalScore}
          </strong>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-primary px-5 py-3 font-bold text-white transition hover:opacity-90"
        >
          확인
        </button>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
