import Image from 'next/image'

export default function Header() {
  return (
    <header className="mb-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Kwaku Amo-Korankye</h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-8">software engineer · student · ai</p>
      
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 row-span-2">
          <Image src="/IMG_0761.PNG" width={667} height={1334} alt="Gallery image 1" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="col-span-1">
          <Image src="/IMG_0743.JPG" width={2497} height={2497} alt="Gallery image 2" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="col-span-1">
          <Image src="/IMG_2443.JPG" width={721} height={721} alt="Gallery image 3" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="col-span-1 row-span-2">
          <Image src="/IMG_2139.JPG" width={3000} height={3000} alt="Gallery image 4" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="col-span-1">
          <Image src="/IMG_6774.JPG" width={4160} height={4160} alt="Gallery image 5" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="col-span-1">
          <Image src="/IMG_9156.PNG" width={750} height={750} alt="Gallery image 6" className="rounded-lg object-cover w-full h-full" />
        </div>
      </div>
    </header>
  )
}

