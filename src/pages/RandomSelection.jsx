import RandomForm from "../components/forms/RandomForm"

const RandomSelection = () => {
    const randomize = (profiles) => {
        console.log(profiles)
    }
  return (
    <section className="mt-5 mb-24">
            <h1 className="text-4xl font-syne font-extrabold leading-tight text-primary mb-5">
                ¿Qué vemos?
            </h1>
            <RandomForm onSubmit={randomize}/>
        </section>
  )
}

export default RandomSelection
