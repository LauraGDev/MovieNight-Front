
import Card from '../cards/card'

const PopularContainer = () => {
  return (
    <div className='grid grid-cols-2 gap-10'>
      <Card title="Solo asesinatos en el edificio" photo="https://image.tmdb.org/t/p/original/7yD7k8IX20WTpHlLqB97Q9d2clq.jpg"/>
      <Card title="Solo asesinatos en el edificio" photo="https://image.tmdb.org/t/p/original/7yD7k8IX20WTpHlLqB97Q9d2clq.jpg" liked={true}/>
    </div>
  )
}

export default PopularContainer
