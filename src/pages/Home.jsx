import BubbleBackground from "../components/BubbleBackground";
import LocationCard from "../components/LocationCard";

export default function Home({ onSelectArea }) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-sky-100">
      <BubbleBackground />

      {/* 전체 영역: flex로 좌우 나눔 */}
      <div className="absolute inset-0 z-10 flex">
        {/* 왼쪽 캐릭터 + 말풍선 (25~30%) */}
        <div className="w-1/4 flex flex-col items-center justify-center px-4">
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4" />
          <div className="bg-white rounded-xl shadow p-4 text-sm text-center">
            멋지다 조문박송~!~
          </div>
        </div>

        {/* 오른쪽 버튼 영역 (나머지 공간) */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6">
            {["A", "B", "C", "D", "E", "F"].map((area) => (
                <button
                key={area} 
                onClick={() => onSelectArea(area) }
                className="px-20 py-14 text-xl bg-white rounded-xl shadow-lg hover:bg-blue-200 transition font-semibold">
                    {area}
                </button>
            ))}
              
          </div>
        </div>
      </div>
    </div>
  );
}