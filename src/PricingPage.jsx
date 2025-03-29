import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-16">
      {/* Section 1: 헤드라인 */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">필요한 만큼만, 합리적으로</h1>
        <p className="text-lg text-muted-foreground">
          가입만 해도 챗봇 질문 500건 + 링크 저장 500건 무료 제공!
        </p>
      </section>

      {/* Section 2: 무료 혜택 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold">🔗 링크 저장</h2>
            <p className="text-2xl font-bold">500건 무료</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold">🤖 챗봇 질문</h2>
            <p className="text-2xl font-bold">500건 무료</p>
          </CardContent>
        </Card>
      </section>

      {/* Section 3: 종량제 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">💡 종량제 요금</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-medium">🔗 링크 저장 100건</h3>
              <p className="text-xl font-bold">990원</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-medium">🤖 챗봇 질문 100건</h3>
              <p className="text-xl font-bold">990원</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: 충전 패키지 */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🎉 할인 패키지</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6 space-y-2 text-center">
              <h3 className="text-lg font-medium">스마트 패키지</h3>
              <p>2,500건 (링크 또는 질문)</p>
              <p className="text-xl font-bold">19,900원</p>
              <p className="text-sm text-green-600">59.8% 할인</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 space-y-2 text-center">
              <h3 className="text-lg font-medium">프로 패키지</h3>
              <p>15,000건 (링크 또는 질문)</p>
              <p className="text-xl font-bold">99,900원</p>
              <p className="text-sm text-green-600">66.3% 할인</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section>
        <h2 className="text-2xl font-bold mb-4">❓ 자주 묻는 질문</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">링크 저장과 챗봇 질문은 같은 크레딧을 쓰나요?</p>
            <p className="text-muted-foreground">아니요, 각각 따로 카운트됩니다.</p>
          </div>
          <div>
            <p className="font-medium">무료 제공 500건은 언제까지 사용할 수 있나요?</p>
            <p className="text-muted-foreground">유효기간 없이 언제든 사용 가능합니다.</p>
          </div>
          <div>
            <p className="font-medium">크레딧은 유효기간이 있나요?</p>
            <p className="text-muted-foreground">없습니다. 충전한 크레딧은 언제든 사용 가능합니다.</p>
          </div>
          <div>
            <p className="font-medium">충전한 크레딧은 자유롭게 사용할 수 있나요?</p>
            <p className="text-muted-foreground">네, 링크 저장/질문 중 원하는 기능에 사용할 수 있습니다.</p>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">🚀 지금 바로 시작해보세요!</h2>
        <p className="text-muted-foreground">
          챗봇 질문 500건 + 링크 저장 500건 무료 제공
        </p>
        <div className="flex justify-center gap-4">
          <Button className="text-lg px-6 py-4">무료로 시작하기</Button>
          <Button variant="outline" className="text-lg px-6 py-4">
            충전 패키지 보기
          </Button>
        </div>
      </section>
    </div>
  );
}
