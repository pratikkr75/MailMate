import PhotoIcon from '@mui/icons-material/Photo';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: PhotoIcon
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarBorderOutlinedIcon
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlinedIcon
    },
    {
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlinedIcon
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutlineOutlinedIcon
    },
    {
        name: 'allmail',
        title: 'All Mail',
        icon: EmailOutlinedIcon
    },

];