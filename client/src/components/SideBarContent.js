import { useState } from 'react';
import { Box, Button, styled, List, ListItem } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from './ComposeMail';
import { useParams, NavLink } from 'react-router-dom';
import { routes } from '../routes/routes';

//styled mui components
const Container = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        '& > a': {
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    '& > ul > a > li > svg': {
        marginRight: 20
    }
})

const ComposeButton = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    padding: 16,
    borderRadius: 16,
    minWidth: 140,
    textTransform: 'none'
})


const SideBarContent = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const { type } = useParams();

    const onComposeClick = () => {
        setOpenDialog(true);
    }

    return (
        <Container>
            <ComposeButton variant="text" onClick={() => onComposeClick()}>
                <CreateOutlinedIcon />Compose
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map(data => (
                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`} >
                            <ListItem style={type === data.name.toLowerCase() ? {
                                backgroundColor: '#d3e3fd',
                                borderRadius: '0 16px 16px 0'
                            } : {}}>
                                <data.icon fontSize='small' />{data.title}
                            </ListItem>
                        </NavLink>
                    ))
                }
            </List>
            <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
        </Container>
    )
}

export default SideBarContent