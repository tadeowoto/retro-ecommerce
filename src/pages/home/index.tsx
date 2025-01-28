import MainLayout from "../../components/MainLayout";
import Card from "../../components/Card";

function Home() {
  return (
    <MainLayout>
      <Card
        title="product title"
        desc="The team is trying to figure out how to make their projects look like everything else they see."
        image="../../../public/mountains-bZ6uRukK.webp"
        tags="Example"
      />
    </MainLayout>
  );
}

export default Home;
