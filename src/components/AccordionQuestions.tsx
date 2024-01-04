'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionQuestions() {
  return (
    <section className="w-screen h-screen bg-emerald-300 rounde flex items-center justify-center">
        <div className="w-5/6 p-5">
            <Accordion type="single" collapsible className="w-full">
                {questions.map((question, index )=> (
                    <AccordionItem value={`item-${index}`} key={question.id}>
                        <AccordionTrigger className=" text-xl">{question.questions}</AccordionTrigger>
                        <AccordionContent className="text-lg">{question.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
  );
}


const questions = [
    {
        id: 1,
        questions: "What do I need to open an account at Caddie?",
        answer: (
            <div>
                • A mobile device to download the application from the Apple Store or Play Store. <br />
                • Be over 13 years old. <br />
                • Have a telephone or cell phone number. <br />
                And ready! With just those requirements you can transform your finances.
            </div>
        )
    },
    {
        id: 2,
        questions: "What benefits does the Caddie application have?",
        answer: (
            <div>
                • Flexibility when purchasing with any mode/card <br />
                • Pause it and reactivate it whenever you want. <br />
                • Make purchases abroad without commission. <br />
                You can also resolve any queries regarding your card through our 24/7 support.
            </div>
        )
    },
    {
        id: 3,
        questions: "Can I pay without using the physical Caddie card?",
        answer: (
            <div>
                Obviously you can! With your virtual card, you can pay directly at the store. <br />
                All postnets have the system to which Caddie is integrated, which allows you to see the cards you have loaded by simply holding your cell phone or scanning the QR
            </div>
        )
    },
    {
        id: 4,
        questions: "Can I pay for services from the app?",
        answer: (
            <div>
                Of course! From the Services section you can choose the invoice you want to pay, enter your information to be able to add it to your account and complete with the amount to pay. <br />
                That's how easy you can pay for more than 5,000 services from one place.
            </div>
        )
    },
];







