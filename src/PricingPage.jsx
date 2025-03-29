import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { RocketIcon, GiftIcon, DollarSignIcon, HelpCircleIcon, BadgePercentIcon } from 'lucide-react';
import { motion } from "framer-motion";

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "링크 저장과 챗봇 질문은 같은 크레딧을 쓰나요?",
      a: "아니요, 각각 따로 카운트됩니다."
    },
    {
      q: "무료 제공 500건은 언제까지 사용할 수 있나요?",
      a: "유효기간 없이 언제든 사용 가능합니다."
    },
    {
      q: "크레딧은 유효기간이 있나요?",
      a: "없습니다. 충전한 크레딧은 언제든 사용 가능합니다."
    },
    {
      q: "충전한 크레딧은 자유롭게 사용할 수 있나요?",
      a: "네, 링크 저장/질문 중 원하는 기능에 사용할 수 있습니다."
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-20 bg-gradient-to-b from-gray-50 to-white text-center text-gray-800">

      {/* Section 1: 헤드라인 */}
      <motion.section className="space-y-3" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-700">필요한 만큼만, 합리적으로</h1>
        <p className="text-xl text-gray-600">
          가입만 해도 <span className="font-semibold text-black">챗봇 질문 500건 + 링크 저장 500건</span> 무료 제공!
        </p>
      </motion.section>

      {/* Section 2: 무료 혜택 */}
      <motion.section className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <div className="flex justify-center items-center gap-4">
          <GiftIcon className="w-8 h-8 text-pink-500" />
          <h2 className="text-3xl font-bold">회원가입만 해도 무료 크레딧 제공</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 text-center space-y-2">
              <h2 className="text-2xl font-semibold text-blue-600">🔗 링크 저장</h2>
              <p className="text-3xl font-bold text-gray-800">500건 무료</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-2">
              <h2 className="text-2xl font-semibold text-purple-600">🤖 챗봇 질문</h2>
              <p className="text-3xl font-bold text-gray-800">500건 무료</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Section 3: 종량제 */}
      <motion.section className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <div className="flex justify-center items-center gap-4">
          <DollarSignIcon className="w-8 h-8 text-amber-500" />
          <h2 className="text-3xl font-bold">💡 종량제 요금</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-medium">🔗 링크 저장 100건</h3>
              <p className="text-2xl font-bold text-gray-800">990원</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-medium">🤖 챗봇 질문 100건</h3>
              <p className="text-2xl font-bold text-gray-800">990원</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Section 4: 충전 패키지 */}
      <motion.section className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <div className="flex justify-center items-center gap-4">
          <RocketIcon className="w-8 h-8 text-green-500" />
          <h2 className="text-3xl font-bold">🎉 할인 패키지</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-blue-200">
            <CardContent className="p-6 space-y-2 text-center">
              <h3 className="text-xl font-semibold text-blue-600 flex items-center justify-center gap-2">
                스탠다드 패키지
                <BadgePercentIcon className="w-5 h-5 text-green-500" />
              </h3>
              <p className="text-gray-700">2,500건 (링크 또는 질문)</p>
              <p className="text-2xl font-bold text-gray-900">19,900원</p>
              <p className="text-sm text-green-600">59.8% 할인</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200">
            <CardContent className="p-6 space-y-2 text-center">
              <h3 className="text-xl font-semibold text-blue-600 flex items-center justify-center gap-2">
                프로 패키지
                <BadgePercentIcon className="w-5 h-5 text-green-500" />
              </h3>
              <p className="text-gray-700">15,000건 (링크 또는 질문)</p>
              <p className="text-2xl font-bold text-gray-900">99,900원</p>
              <p className="text-sm text-green-600">66.3% 할인</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Section 5: FAQ (Accordion) */}
      <motion.section className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <div className="flex justify-center items-center gap-4">
          <HelpCircleIcon className="w-8 h-8 text-indigo-500" />
          <h2 className="text-3xl font-bold">❓ 자주 묻는 질문</h2>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto text-left">
          {faqs.map((item, i) => (
            <div key={i} className="border rounded-xl overflow-hidden">
              <button
                className="w-full px-4 py-3 text-left font-semibold bg-gray-100 hover:bg-gray-200"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                Q. {item.q}
              </button>
              {openIndex === i && (
                <div className="px-4 py-3 text-gray-700 bg-white border-t">A. {item.a}</div>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Section 6: CTA */}
      <motion.section className="text-center space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <h2 className="text-3xl font-extrabold text-gray-800">🚀 지금 바로 시작해보세요!</h2>
        <p className="text-lg text-gray-600">
          챗봇 질문 500건 + 링크 저장 500건 무료 제공
        </p>
        <div className="flex justify-center gap-6">
          <Button className="text-lg px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white">무료로 시작하기</Button>
          <Button variant="outline" className="text-lg px-6 py-4 border-blue-600 text-blue-600 hover:bg-blue-50">
            충전 패키지 보기
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
