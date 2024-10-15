import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// ... 나머지 코드
export const Middle: React.FC = () => {
  return (
    <div className="flex items-center max-w-[700px] w-full justify-center  p-2 space-x-3">
      <input
        type="text"
        className="border w-full p-2 rounded-md focus:outline-none"
      />
      <button>
        <MagnifyingGlassIcon className="size-7 text-gray-500" />
      </button>
    </div>
  );
};
