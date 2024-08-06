import Link from 'next/link'
import { getManifestos } from '../lib/manifesto'

export default function Home({ manifestos }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Brand Manifestos</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {manifestos.map((manifesto) => (
                <Link href={`/manifesto/${manifesto.id}`} key={manifesto.id}>
                  <a className="block hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg font-medium text-gray-900">{manifesto.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{manifesto.industry}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const manifestos = getManifestos()
  return {
    props: {
      manifestos,
    },
  }
}
