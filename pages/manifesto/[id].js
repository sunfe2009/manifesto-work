import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function ManifestoPage({ manifesto }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{manifesto.title}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-sm font-medium text-gray-500">Industry</p>
                <p className="mt-1 text-lg text-gray-900">{manifesto.industry}</p>
                <div className="mt-6 prose prose-indigo">{manifesto.content}</div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/">
                <a className="text-indigo-600 hover:text-indigo-900">← Back to all manifestos</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  // ... (保持不变)
}

export async function getStaticProps({ params }) {
  // ... (保持不变)
}
