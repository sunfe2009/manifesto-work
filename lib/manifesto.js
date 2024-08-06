import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const manifestoDirectory = path.join(process.cwd(), 'content/manifesto')

export function getManifestos() {
  const filenames = fs.readdirSync(manifestoDirectory)
  return filenames.map((filename) => {
    const filePath = path.join(manifestoDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      id: filename.replace(/\.md$/, ''),
      title: data.title,
      industry: data.industry,
    }
  })
}

export function getManifestoById(id) {
  const filePath = path.join(manifestoDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    id,
    title: data.title,
    industry: data.industry,
    content,
  }
}
