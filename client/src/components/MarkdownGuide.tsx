import { Box, Paper, Typography } from '@mui/material';
import Markdown from 'react-markdown';


function MarkdownGuide() {
  return (
       <Box component={"div"} className="md:pl-10 pl-4 border border-gray-300 rounded-md shadow-xl md:max-h-48 overflow-auto mb-4">
            <Paper className="p-4 flex flex-col " elevation={0}>
                <Markdown >
                    ### **Markdown Quick Guide**
                </Markdown>
                <Typography variant="body2" className='text-gray-600' gutterBottom sx={{mt:"1rem"}}>
                    Use <strong># to ######</strong> for Headings from h1 to h6
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong>**your_text**</strong> to bold your text and
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use  <strong> *your_text*</strong> to get italic text
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong>~~your_text~~</strong> to strike-through your text
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong> {`< your_quote`} </strong> to add a BlockQuote
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong> - list item</strong> to get an 'Unordered list' and 
                </Typography>
                <Typography variant="body2" className='text-gray-600' gutterBottom>
                    Use <strong> 1. list item</strong>  a Numbered list
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
       </Box>
  )
}

export default MarkdownGuide