import LoadingScreen from "@/components/molecules/LoadingScreen/LoadingScreen";
import NameAnimation from "@/components/molecules/NameAnimation/NameAnimation";

export default function Home() {
  return (
    <div>
      <main>
        <LoadingScreen />
        <NameAnimation />
      </main>
    </div>
  );
}
