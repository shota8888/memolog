import Head from 'next/head'
import styled from 'styled-components'
import utilStyles from 'src/styles/util-styles'
import Link from 'next/link'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LinkIcon from '@material-ui/icons/Link';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SchoolIcon from '@material-ui/icons/School';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const name = 'shota'

export default function Profile() {

  return (
    <Style>
      <ProfileImage
        src="/images/profile.jpg"
        alt={name}
      />
      <HeadingLg>{name}</HeadingLg>
      <HeadingMd css="width: 80%">
        <p>Hello!</p>
      </HeadingMd>
      <$List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SchoolIcon />
            </Avatar>
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
            <Avatar>
              <PermIdentityIcon />
            </Avatar>
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
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <LinkIcon />
            </Avatar>
          </ListItemAvatar>
          <$ListItemText primary="Link" secondary={
            <>
              <Typography component="span" color="textPrimary">
                <a href="https://twitter.com/sh_sh_8888">Twitter</a><br />
                <a href="https://github.com/shota8888">Github</a>
              </Typography> 
            </>
          } />
        </ListItem>
      </$List>
    </Style>
  )
}

const Style = styled.div`
  width: 450px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: thin solid rgba(0,0,0,0.3);
`

const $List = styled(List)`
  width: 100%;
  max-width: 300px;
  margin-top: 1rem;
`

const $ListItemText = styled(ListItemText)`
  color: rgba(0,0,0,0.6);
`

const ProfileImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 100px;
`

const HeadingLg = utilStyles.Heading.Lg
const HeadingMd = utilStyles.Heading.Md


const HeadingXl = utilStyles.Heading.Xl
const ColorInherit = utilStyles.colorInherit

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  /* flex-direction: column;
  align-items: center; */
`

const BackToHome = styled.div`
  margin: 3rem 0 0;
`
