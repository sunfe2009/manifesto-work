import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Home({ manifestos }) {
  return (
    <div>
      <h1>Brand Manifestos</h1>
      {manifestos.map((manifesto) => (
        <div key={manifesto.id}>
          <Link href={`/manifesto/${manifesto.id}`}>
            <a>{manifesto.title}</a>
          </Link>
          <p>{manifesto.industry}</p>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const manifestoDirectory = path.join(process.cwd(), 'content/manifesto')
  const filenames = fs.readdirSync(manifestoDirectory)

  const manifestos = filenames.map((filename) => {
    const filePath = path.join(manifestoDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      id: filename.replace(/\.md$/, ''),
      title: data.title,
      industry: data.industry,
    }
  })

  return {
    props: {
      manifestos,
    },
  }
}
