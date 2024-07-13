import Calculator from "@/components/Calculator";
import MoneyList from "@/components/MoneyList";

export default function Home() {
  return (
    <div className="w-full h-[90vh] flex justify-between items-center">
      <div className="w-[45%] flex justify-center">
        <Calculator />
      </div>
      <div className="w-[45%] flex justify-center">
        <MoneyList />
      </div>
    </div>
  );
}
