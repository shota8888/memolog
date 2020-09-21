import React from 'react'
import styled from 'styled-components'
import utilStyles from 'src/styles/util-styles'
import { DrawerContext } from './layout'
import { Config } from 'src/utils/Config'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SchoolIcon from '@material-ui/icons/School';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import media from 'src/styles/mediaqueries'

export default function Profile() {
  const drawerContext = React.useContext(DrawerContext)

  return (
    <_Profile>
      <_IconButton onClick={() => { drawerContext.setDrawerState(false) }}>
        <ClearIcon css="font-size: 2rem;" />
      </_IconButton>
      <_Main>
        <$Paper variant="outlined">
          <ProfileImage
            src="/images/profile.jpg"
            alt={Config.name}
          />
          <HeadingLg>{Config.name}</HeadingLg>
            <p>このサイトは日々の技術的なメモを残していくサイトです．<br />
            Webアプリ開発に興味があり，フロントエンドの勉強をしてます．主にReactとTypescroptで開発することが多いです．
            </p>
        </$Paper>
        <$List>
          <ListItem>
            <ListItemAvatar>
              <$Avatar>
                <SchoolIcon />
              </$Avatar>
            </ListItemAvatar>
            <$ListItemText primary="University" secondary={
              <>
                <Typography component="span" color="textPrimary">
                  東京理科大学
                </Typography>
              </>
            } />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <$Avatar>
                <PermIdentityIcon />
              </$Avatar>
            </ListItemAvatar>
            <$ListItemText primary="Age" secondary={
              <>
                <Typography component="span"  color="textPrimary">
                  20
                </Typography>
              </>
            } />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <$Avatar>
                <TwitterIcon />
              </$Avatar>
            </ListItemAvatar>
            <$ListItemText primary="Twitter" secondary={
              <>
                <Typography component="span" color="textPrimary">
                  <_A href="https://twitter.com/sh_sh_8888" target="_blank" rel="noopener">@sh_sh_8888</_A>
                </Typography> 
              </>
            } />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <$Avatar>
                <GitHubIcon />
              </$Avatar>
            </ListItemAvatar>
            <$ListItemText primary="Github" secondary={
              <>
                <Typography component="span" color="textPrimary">
                  <_A href="https://github.com/shota8888" target="_blank" rel="noopener">shota8888</_A>
                </Typography> 
              </>
            } />
          </ListItem>
        </$List>
      </_Main>
    </_Profile>
  )
}

const _Profile = styled.div`
  width: 300px;
`

const _IconButton = styled(IconButton)`
  width: 60px;
  justify-content: flex-start;
  font-size: 2rem;
  display: none;
  ${media.desktop`
    display: block;
  `}
`

const _Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  border-right: thin solid rgba(0,0,0,0.3);
  height: 100%;
  ${media.desktop`
    border-right: none;
  `}
`

const $Paper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  width: 85%;
  padding: ${(props) => props.theme.spacing(2)}px;
  border-radius: 8px;
  box-shadow: 1px 1px 12px #b4b4b4; 
  ${media.desktop`
    font-size: 0.8rem;
  `} 
`

const ProfileImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 100px;
  ${media.desktop`
    width: 5rem;
    height: 5rem;
  `} 
`

const $List = styled(List)`
  width: 100%;
  max-width: 300px;
  margin-top: 1rem;
`

const $Avatar = styled(Avatar)`
  background-color: #646464;
`

const $ListItemText = styled(ListItemText)`
  color: rgba(0,0,0,0.6);
`

const _A = styled.a`
  font-weight: 400;
  &:hover {
    font-weight: 600;
  }
`

const HeadingLg = utilStyles.Heading.Lg;
