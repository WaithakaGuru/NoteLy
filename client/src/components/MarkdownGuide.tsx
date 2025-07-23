import { Paper, Typography } from '@mui/material';
import Markdown from 'react-markdown';


function MarkdownGuide() {
  return (
    <>
        {/* <div>MarkdownGuide</div> */}
        <Paper className="p-2 flex flex-col">
            <Markdown>
                ### **Markdown Quick Guide**
            </Markdown>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong># to ######</strong> for Headings from h1 to h6
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong>**your_text**</strong> to bold your text
                </Typography>
                <Typography variant="body2" className='text-gray-600'>
                    Use <strong>*your_text*</strong> to get italic text
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong>~~your_text~~</strong> to strike-through your text
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong> {`< your_quote`} </strong> to add a BlockQuote
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong> - list item</strong> to get a BulletList 'Unordered list'
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong> 1. list item</strong> to get a Numbered list
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong>`line_of_code`</strong> for a line of code
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong>``` multiple_lines_of_code```</strong> for multiple lines of code
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong>[text](url_to_webpage)</strong> to create a link
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong>![alt](path_url_to_image)</strong> to add an image
                </Typography>
             
        </Paper>
    </>
  )
}

export default MarkdownGuide