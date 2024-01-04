import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";

export const reasons = [
  {
    id: 1,
    description: "Make purchases at any store or website in the world",
    imageSrc: "/banking-app.png",
  },
  {
    id: 2,
    description: "Send and receive money from any account",
    buttonContent: "Get to know transfer",
    imageSrc: "/transfer-banking-app.png",
  },
  {
    id: 3,
    description: "100% digital, you can manage your finances however you want.",
    buttonContent: "Get to know digital",
    imageSrc: "/digital-card.png",
  },
];



export const CardContainer = () => {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center rounded-br-3xl rounded-bl-3xl bg-black -mb-8 mt-10 z-10">
      <div className="grid gap-4 p-9 max-w-[1440px] sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-1 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2 xlgrid-rows-2">
        {reasons.map((reason, index) => (
          <Card
            key={reason.id}
            className={`${
              index === 0 ? "col-span-1 row-span-2 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2 xl:col-span-1 xl:row-span-2"  : " min-h-80 max-w-1/2"
            } bg-gradient-to-b from-emerald-100 to-cyan-200`}
          >
            <CardContent
              className={`w-full h-full p-9 flex items-center justify-center ${
                index === 0 ? "flex-col-reverse" : "flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row"
              }`}
            >
              <div className="mt-5">
                <p className="mb-6 font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{reason.description}</p>
                {reason.buttonContent && <Button variant="outline">{reason.buttonContent}</Button>}
              </div>
              <img src={reason.imageSrc} alt="image-card" className="w-1/2"/>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
