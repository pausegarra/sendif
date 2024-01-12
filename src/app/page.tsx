import { CircularForm } from '@/components/circular-form';
import { ReturnForm } from '@/components/return-form';

export default function Home() {
  return (
    <div className='h-screen flex justify-evenly'>
      <div className='mt-5'>
        <h2 className=' text-2xl font-bold mb-5'>Itinerarios CIRCULARES / IDA Y VUELTA</h2>
        <ReturnForm />
      </div>

      <div className="w-px bg-gray-300 self-stretch mx-4" />

      <div className='mt-5'>
        <h2 className='text-2xl font-bold mb-5'>Itinerarios LINEALES / POR ETAPAS</h2>
        <CircularForm />
      </div>
    </div>
  )
}
