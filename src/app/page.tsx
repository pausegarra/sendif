import { LinealForm } from '@/components/lineal-form';
import { ReturnForm } from '@/components/return-form';

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center md:items-start h-screen'>
      <div className='mt-5 w-full max-w-[400px] px-4 md:px-0'>
        <h2 className='text-2xl font-bold mb-5'>Itinerarios CIRCULARES / IDA Y VUELTA</h2>
        <ReturnForm />
      </div>

      <div className="hidden md:block w-px bg-gray-300 self-stretch mx-4" />

      <div className='mt-5 w-full max-w-[400px] px-4 md:px-0'>
        <h2 className='text-2xl font-bold mb-5'>Itinerarios LINEALES / POR ETAPAS</h2>
        <LinealForm />
      </div>
    </div>
  );
}
