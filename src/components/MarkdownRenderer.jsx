import Markdown from 'react-markdown'

const MarkdownRenderer =({content})=>{

    return(
        <Markdown components={{
            a:({node, ...props}) => <a {...props} target='_blank' rel='noopener noreferrer'></a>
        }}>
             {content}
        </Markdown>
    )
}
export default MarkdownRenderer