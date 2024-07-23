"use client";
import React, { useState } from "react";

const continentCountries: { [key: string]: string[] } = {
  아프리카: [
    "가나",
    "기니",
    "나미비아",
    "나이지리아",
    "남수단",
    "라이베리아",
    "레소토",
    "르완다",
    "리비아",
    "마다가스카르",
    "말라위",
    "모로코",
    "모리셔스",
    "모리타니",
    "부룬디",
    "사우디아라비아",
    "세이셸",
    "소말리아",
    "수단",
    "시에라리온",
    "알제리",
    "앙골라",
    "에리트레아",
    "에스와티니",
    "에티오피아",
    "우간다",
    "이집트",
    "잠비아",
    "지부티",
    "짐바브웨",
    "케냐",
    "코모로",
    "콩고",
    "탄자니아",
  ],
  아시아: [
    "네팔",
    "대한민국",
    "동티모르",
    "라오스",
    "레바논",
    "마카오",
    "말레이시아",
    "몰디브",
    "몽골",
    "미얀마",
    "바레인",
    "방글라데시",
    "베트남",
    "부탄",
    "브루나이",
    "사우디아라비아",
    "스리랑카",
    "시리아",
    "싱가포르",
    "아랍에미리트",
    "아르메니아",
    "아제르바이잔",
    "아프가니스탄",
    "예멘",
    "오만",
    "요르단",
    "우즈베키스탄",
    "이라크",
    "이란",
    "이스라엘",
    "인도",
    "인도네시아",
    "일본",
    "조지아",
    "중국",
    "카자흐스탄",
    "카타르",
    "캄보디아",
    "쿠웨이트",
    "키르기스스탄",
    "타지키스탄",
    "태국",
    "투르크메니스탄",
    "파키스탄",
    "필리핀",
    "홍콩",
  ],
  유럽: [
    "그리스",
    "네덜란드",
    "노르웨이",
    "덴마크",
    "독일",
    "라트비아",
    "러시아",
    "루마니아",
    "룩셈부르크",
    "리투아니아",
    "리히텐슈타인",
    "모나코",
    "몬테네그로",
    "몰도바",
    "몰타",
    "바티칸",
    "벨기에",
    "벨로루시",
    "보스니아-헤르체고비나",
    "북마케도니아",
    "불가리아",
    "산마리노",
    "세르비아",
    "스웨덴",
    "스위스",
    "스페인",
    "슬로바키아",
    "슬로베니아",
    "아이슬란드",
    "아일랜드",
    "안도라",
    "알바니아",
    "에스토니아",
    "영국",
    "오스트리아",
    "우크라이나",
    "이탈리아",
    "체코",
    "크로아티아",
    "키프로스",
    "터키",
    "포르투갈",
    "폴란드",
    "프랑스",
    "핀란드",
    "헝가리",
  ],
  북미: [
    "과테말라",
    "그레나다",
    "니카라과",
    "도미니카",
    "멕시코",
    "미국",
    "바베이도스",
    "바하마",
    "버뮤다",
    "벨리즈",
    "세인트루시아",
    "세인트키츠네비스",
    "아이티",
    "엘살바도르",
    "온두라스",
    "자메이카",
    "캐나다",
    "코스타리카",
    "쿠바",
    "트리니다드토바고",
    "파나마",
  ],
  남미: [
    "가이아나",
    "베네수엘라",
    "볼리비아",
    "브라질",
    "수리남",
    "아르헨티나",
    "에콰도르",
    "우루과이",
    "칠레",
    "콜롬비아",
    "파라과이",
    "페루",
  ],
  오세아니아: [
    "나우루",
    "뉴질랜드",
    "미크로네시아",
    "바누아투",
    "사모아",
    "솔로몬 제도",
    "오스트레일리아",
    "키리바시",
    "통가",
    "투발루",
    "파푸아뉴기니",
    "팔라우",
    "피지",
  ],
};

export default function CountrySelectionModal({
  isOpen,
  onClose,
  onSelect,
}: any) {
  const [continent, setContinent] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const handleClose = () => {
    setContinent("");
    setCountry("");
    onClose();
  };

  const handleContinentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedContinent = event.target.value;
    setContinent(selectedContinent);
    setCountry(""); // 나라 선택 초기화
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const handleSelect = () => {
    if (country) {
      onSelect(country);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="h-[20rem] bg-white p-8 rounded shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={handleClose}
        >
          X
        </button>
        <h2 className="text-2xl mb-4">국가 선택</h2>
        <div className="mb-4">
          <label
            htmlFor="continent"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            대륙
          </label>
          <select
            value={continent}
            onChange={handleContinentChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>
              대륙을 선택하세요
            </option>
            {Object.keys(continentCountries).map((cont) => (
              <option key={cont} value={cont}>
                {cont}
              </option>
            ))}
          </select>
        </div>
        {continent && (
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              나라
            </label>
            <select
              value={country}
              onChange={handleCountryChange}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                나라를 선택하세요
              </option>
              {continentCountries[continent].map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        )}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded absolute bottom-4 right-4"
          onClick={handleSelect}
        >
          선택
        </button>
      </div>
    </div>
  );
}
