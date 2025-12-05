import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What are the signs of video game addiction?",
    answer: "Common signs include: preoccupation with gaming even when not playing, withdrawal symptoms (irritability, anxiety) when unable to play, loss of interest in other activities, continued gaming despite negative consequences on work/school/relationships, lying about time spent gaming, and using games to escape negative emotions or problems."
  },
  {
    question: "How do I find a video game addiction therapist near me?",
    answer: "Better Gamers App provides a directory of certified therapists specializing in video game and internet gaming disorder. Many offer telehealth sessions for convenient access nationwide. You can search by location, specialty, and insurance acceptance. Look for therapists with experience in CBT (Cognitive Behavioral Therapy) and addiction counseling."
  },
  {
    question: "What is the 988 Suicide and Crisis Lifeline?",
    answer: "988 is a free, confidential 24/7 crisis support line available across the United States. Call or text 988 to connect with trained counselors who can help with mental health crises, including those related to gaming addiction, depression, or suicidal thoughts. Support is available in English and Spanish."
  },
  {
    question: "Are there video game detox programs available?",
    answer: "Yes, several residential and outpatient programs specialize in gaming addiction treatment. Programs like reSTART Life offer 30-90 day residential treatment, while Game Quitters provides online coaching and community support. Many traditional addiction treatment centers now also address gaming disorder."
  },
  {
    question: "Is video game addiction a recognized medical disorder?",
    answer: "Yes. The World Health Organization (WHO) officially recognized Gaming Disorder in the ICD-11 in 2018. The American Psychiatric Association includes Internet Gaming Disorder as a condition warranting further study in the DSM-5. This recognition has led to more research, better treatment options, and insurance coverage for therapy."
  },
  {
    question: "How can I help a family member with gaming addiction?",
    answer: "Start with compassionate communication—avoid ultimatums or removing games suddenly. Learn about gaming addiction together, set healthy boundaries, and encourage professional help. Family therapy can be highly effective. Consider joining support groups for families affected by gaming addiction. NAMI (National Alliance on Mental Illness) offers resources for families."
  },
  {
    question: "What treatments are effective for gaming addiction?",
    answer: "Evidence-based treatments include Cognitive Behavioral Therapy (CBT), which helps identify and change unhealthy thought patterns, and Motivational Interviewing, which builds intrinsic motivation for change. Group therapy, family therapy, and in some cases, medication for underlying conditions like depression or ADHD, can also be helpful."
  },
  {
    question: "How long does recovery from gaming addiction take?",
    answer: "Recovery timelines vary by individual. Initial detox periods typically last 30-90 days. Many people begin to see improvements within weeks of starting treatment, but building healthy habits and preventing relapse is an ongoing process. With proper support, most people can develop a healthier relationship with gaming or abstain entirely if needed."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background" aria-labelledby="faq-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4">
              <HelpCircle className="w-7 h-7 text-primary" />
            </div>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Get answers to common questions about video game addiction and recovery.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <p className="text-muted-foreground">
              Have more questions?{" "}
              <a 
                href="#resources" 
                className="text-primary hover:underline font-medium"
              >
                Contact our crisis support
              </a>
              {" "}or{" "}
              <a 
                href="#therapist" 
                className="text-primary hover:underline font-medium"
              >
                speak with a therapist
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
