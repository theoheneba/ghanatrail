import React from 'react';
import { ArrowRight } from 'lucide-react';

const regions = [
  {
    id: '1',
    name: 'Greater Accra',
    description: 'Experience the vibrant capital city and coastal attractions',
    imageUrl:
      'https://skaiaconstruction.com/wp-content/uploads/2024/01/Skaia-Architecture-and-Construction-Building-a-new-Tomorrow-A-Deep-Dive-into-Construction-Technology-Future-Accra-1.webp',
  },
  {
    id: '2',
    name: 'Ashanti Region',
    description: 'Discover rich cultural heritage and traditional crafts',
    imageUrl:
      'https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/468671042_3914785172099478_6739100453401847339_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFTpI1XKXZf8GvobR0_U6viTutDIRqCKPJO60MhGoIo8u27g92RAo8g8aa8KyK1Fjv8FKJpBF93Aw_qbscA5hQ3&_nc_ohc=vJS-YqoQLP8Q7kNvgGcllza&_nc_oc=AdjIhrNzr0lW7gz8VPvVc1p5VlVuozDpA5bRDpuyYfeeqP3mFsQRidvh5WwRatk1grA&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=AmIG4ZyJS-r7fEX6lkcMFYZ&oh=00_AYHijzAsjlT-mAn4Rmdlx1rMkVmMsAD6a6wgf9DZoPrqvw&oe=67D53D9B',
  },
  {
    id: '3',
    name: 'Central Region',
    description: 'Explore historic castles and pristine beaches',
    imageUrl:
      'https://momaa.org/wp-content/uploads/2019/10/Cape-Coast-Castle-Museum.png',
  },
  {
    id: '4',
    name: 'Volta Region',
    description: 'Adventure through mountains and waterfalls',
    imageUrl:
      'https://images.trvl-media.com/lodging/106000000/105120000/105114900/105114877/a5ac9dc9.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
  },
];

export default function FeaturedRegions() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Regions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <div
              key={region.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={region.imageUrl}
                  alt={region.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
                <p className="text-sm text-gray-200 mb-4">
                  {region.description}
                </p>
                <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  Explore Region
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
