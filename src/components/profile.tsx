import Head from 'next/head'
import styled from 'styled-components'
import utilStyles from 'src/styles/util-styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SchoolIcon from '@material-ui/icons/School';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const name = 'shota'

export default function Profile() {
  return (
    <_Profile>
      <$Paper variant="outlined">
      <ProfileImage
        src="/images/profile.jpg"
        alt={name}
      />
      <HeadingLg>{name}</HeadingLg>
        <p>日々の技術的なメモを残していくサイトです．<br />
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
              <Typography component="span" color="textPrimary">
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
    </_Profile>
  )
}

const _Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin-top: 2rem;
  border-right: thin solid rgba(0,0,0,0.3);
  height: 100%;
`

const $Paper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  width: 85%;
  padding: ${(props) => props.theme.spacing(2)}px;
  border-radius: 8px;
  box-shadow: 1px 1px 12px #b4b4b4; 
`

const ProfileImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 100px;
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
  color: rgba(0,0,255,0.6);
  &:hover {
    color: rgba(0,0,255,1.0);
  }
`

const HeadingLg = utilStyles.Heading.Lg;
