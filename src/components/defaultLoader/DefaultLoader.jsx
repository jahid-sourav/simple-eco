import PuffLoader from "react-spinners/PuffLoader";

export default function DefaultLoader() {
  return (
    <section className="flex min-h-[calc(100vh-124px)] items-center justify-center">
      <div>
        <PuffLoader color={"#333"} size={150} />
      </div>
    </section>
  );
}
