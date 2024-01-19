import { useEffect } from 'react'

type CodeProps = {
  code: string
  language?: string
}

function Code({ code, language }: CodeProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <pre className='code'>
      <code className={`language-${language ?? 'python'}`}>{code}</code>
    </pre>
  )
}

export default Code
