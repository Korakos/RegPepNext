import { Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddedView: {
      maxWidth: '100%',
      padding: theme.spacing(2)
    },
    centeredView: {
      maxWidth: '100%',
      padding: theme.spacing(2),
      alignItems: 'center',
      justifyContent: 'center'
    },
    fullSize: {
      width: '100%'
    },
    centeredImage: {
      width: '130%',
      position: 'relative',
      right: '15%',
      WebkitBoxShadow: '0px 5px 15px 0px rgba(0,0,0,0.75)',
      MozBoxShadow: '0px 5px 15px 0px rgba(0,0,0,0.75)',
      boxShadow: '0px 5px 15px 0px rgba(0,0,0,0.75)'
    },
    coloredText: {
      color: COLORS.primary
    }
  })
);

export default function Index(): React.ReactElement {
  const classes = useStyles();
  const router = useRouter();
  return (
    <BaseView>
      <Box my={3}>
        <Box className={classes.paddedView}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            RegPep23
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            23rd International Symposium on Regulatory Peptides
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            August 15-19, 2021
          </Typography>
          <Typography variant="body1" component="h1" gutterBottom>
            Resort and Conference Center Princess Mundo Imperial
          </Typography>
        </Box>
        <Box className={classes.centeredImage}>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            onClickItem={(index: number) => {
              if(index == 3){
                router.push("themes");
              }
            }}
          >
            <div className={classes.fullSize}>
              <img className={classes.fullSize} src="/RegPep23_banner.jpg" />
              <p className="legend">RegPep23</p>
            </div>
            <div className={classes.fullSize}>
              <img
                className={classes.fullSize}
                src="/mundo-imperial-acapulco.jpg"
              />
              <p className="legend">RegPep23 Venue</p>
            </div>
            <div className={classes.fullSize}>
              <img className={classes.fullSize} src="/plenary_carousel.png" />
              <p className="legend">Keynote Speakers</p>
            </div>
            <div className={classes.fullSize}>
              <img className={classes.fullSize} src="/plenary_symposium.png" />
              <p className="legend">Plenary Symposium</p>
            </div>
            <div className={classes.fullSize}>
              <img className={classes.fullSize} src="/regpep_23_themes.png" />
              <p className="legend">RegPep23 Topics</p>
            </div>
          </Carousel>
        </Box>
        <Box>
          <Typography
            variant="body1"
            component="h1"
            className={classes.paddedView}
          >
            <b className={classes.coloredText}>
              The International Symposium on Regulatory Peptides (RegPep)
            </b>{' '}
            under the auspice of the{' '}
            <Link href="http://regpep.org" target="_blank">
              International Regulatory Peptides Society
            </Link>{' '}
            has been held every two years in various countries all over the
            world, starting in Asilomar (USA, 1976).
          </Typography>
          <Typography
            variant="body1"
            component="h1"
            className={classes.paddedView}
          >
            The 23rd International Symposium on Regulatory Peptides, RegPep23, with the specific theme of Regulatory Peptides in Brain-Body Interaction, under the auspices of the International Regulatory Peptide Society (IRPS), will be held on August 15-19, 2021 at the Resort and Conference Center Princess Mundo Imperial, in the newly developed Riviera Diamante, Acapulco, Mexico.
          </Typography>
          <Typography
            variant="body1"
            component="h1"
            className={classes.paddedView}
          >
            RegPep biennial meetings are unique venues for basic and clinician scientists studying the physiology and pathophysiology of peptide actions, integrated from a brain-body-behavior perspective in health and disease. In addition, each RegPep conference aims to recognize outstanding contributions to peptide regulation in systems biology, to support diversity and under-represented groups, to promote best practices in the biomedical sciences, and to provide networking and mentoring opportunities.
          </Typography>
          <Typography
            variant="body1"
            component="h1"
            className={classes.paddedView}
          >
            We look forward to welcoming you at RegPep23, Acapulco Diamante,
            México.
          </Typography>
        </Box>
        <Box className={classes.centeredView}>
          <Box className={classes.paddedView}>
            <Typography variant="body1" className={classes.coloredText}>
              Ruud Buijs
            </Typography>
            <Typography variant="body1">Chair of RegPep23</Typography>
          </Box>
          <Box className={classes.paddedView}>
            <Typography variant="body1" className={classes.coloredText}>
              Lee Eiden and Limei Zhang
            </Typography>
            <Typography variant="body1">Co-Presidents of IRPS</Typography>
          </Box>
        </Box>
        <Box className={classes.paddedView}>
          <Button
            variant="contained"
            color="primary"
            href="http://www.regpep.org/international-regulatory-peptide-society/regpep-2020/"
            target="_blank"
          >
            Registration
          </Button>
        </Box>
      </Box>
    </BaseView>
  );
}
