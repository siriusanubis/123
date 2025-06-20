
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const principles = [
  "Emotion ≠ Truth – Emotions are biological noise, not reliable signals.",
  "Neutral Is Not Numb – You are unshaken unless logic demands action.",
  "All Behavior Becomes Calculation – Every move is chosen for effect, not emotion."
];

const mantras = [
  "Emotion is data, not direction.",
  "I observe. I calculate. I act.",
  "Silence is my strength. Absence is my armor.",
  "I am not here to feel. I am here to win."
];

const avoidList = [
  "Sentimental rituals (e.g. revisiting memories/messages)",
  "Emotional music or films",
  "Emotional conversations about the past",
  "Self-narratives with guilt, regret, or victimhood"
];

const practices = [
  {
    title: "Morning Cold Alignment",
    details: "Cold shower or face plunge. Mantra: 'Nothing controls me.' Visualize yourself as a calm agent."
  },
  {
    title: "Emotional Deconditioning",
    details: "Write down 1 emotion, trigger, irrelevance, and ideal response."
  },
  {
    title: "Stimulus–Pause–Response Drill",
    details: "Pause, say: 'Pause. Process. Choose.' Act with strategy."
  },
  {
    title: "Observation of Others",
    details: "Analyze emotional patterns without absorbing them. Use insights strategically."
  },
  {
    title: "Zero Expectation Protocol",
    details: "Expect nothing. Mantra: 'I owe nothing. I am owed nothing.'"
  },
  {
    title: "Input Control",
    details: "Avoid emotional media. Read only strategic, rational material."
  }
];

export default function EmotionalNeutralityApp() {
  const [selectedPractice, setSelectedPractice] = useState(null);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Emotional Neutrality Training</h1>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">Core Principles</h2>
          {principles.map((p, i) => (
            <p key={i}>• {p}</p>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">Daily Practices</h2>
          {practices.map((p, i) => (
            <Button key={i} className="w-full justify-start" variant="outline" onClick={() => setSelectedPractice(p)}>
              {p.title}
            </Button>
          ))}
          {selectedPractice && (
            <div className="mt-4 p-2 border rounded bg-gray-100 text-sm">
              <strong>{selectedPractice.title}</strong>
              <p>{selectedPractice.details}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">Mantras</h2>
          {mantras.map((m, i) => (
            <p key={i}>• {m}</p>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">Avoid These</h2>
          {avoidList.map((a, i) => (
            <p key={i}>• {a}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
