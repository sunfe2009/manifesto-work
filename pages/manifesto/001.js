import fs from 'fs'
   import path from 'path'
   import matter from 'gray-matter'
   import ReactMarkdown from 'react-markdown'

   export default function ManifestoPage({ manifesto }) {
     return (
       <div>
         <h1>{manifesto.title}</h1>
         <p>Industry: {manifesto.industry}</p>
         <div>
           <ReactMarkdown>{manifesto.content}</ReactMarkdown>
         </div>
       </div>
     )
   }

   export async function getStaticPaths() {
     const manifestoDirectory = path.join(process.cwd(), 'content/manifesto')
     const filenames = fs.readdirSync(manifestoDirectory)

     const paths = filenames.map((filename) => ({
       params: { id: filename.replace(/\.md$/, '') },
     }))

     return { paths, fallback: false }
   }

   export async function getStaticProps({ params }) {
     const filePath = path.join(process.cwd(), 'content/manifesto', `${params.id}.md`)
     const fileContents = fs.readFileSync(filePath, 'utf8')
     const { data, content } = matter(fileContents)

     return {
       props: {
         manifesto: {
           id: params.id,
           title: data.title,
           industry: data.industry,
           content,
         },
       },
     }
   }
