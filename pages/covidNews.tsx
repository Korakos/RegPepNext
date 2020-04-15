import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BaseView from '../src/BaseView';
import { COLORS } from '../src/constants/color';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddedView: {
      maxWidth: '100%',
      padding: theme.spacing(2)
    },
    coloredText: {
      color: COLORS.primary
    },
    centeredView: {
      maxWidth: '100%',
      padding: theme.spacing(2),
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
);

export default function covidNews() {
  const classes = useStyles();
  return (
    <BaseView>
      <Box my={4}>
        <Box className={classes.paddedView}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={classes.coloredText}
          >
            IRPS news alert - March 17th, 2020
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            Dear RegPep community and friends,
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            As Co-Presidents and President-Elect of IRPS, we are writing to wish
            safety and well- being for all our community, family and friends
            during these difficult times.
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            className={classes.paddedView}
          >
            Despite the grimness of the present moment, we still would like to
            share some encouraging news about our society.
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={classes.paddedView}
            color="secondary"
          >
            RegPep2020 is still on!
          </Typography>
          <Box className={classes.paddedView}>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.paddedView}
            >
              We want all colleagues and friends who are interested in the
              RegPep meetings to know that we still plan to continue with our
              September 18-22 date for RegPep2020, in Acapulco Diamante, México,
              but also wish to say we are monitoring the situation of COVID19
              closely, in terms of not exposing our members to travel and social
              gathering risks. Therefore, we have a plan B arranged with our
              venue, the Princess Hotel and Conference Center, for a two-month
              postponement only if this should become necessary.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.paddedView}
            >
              We have extended the early bird registration deadline for
              RegPep2020 to May 18th, 2020, for speaker’s confirmation and
              travel awards applications, and have amended the cancelation
              policy in case we have to postpone the event to November 18-22,
              2020, and some of our colleagues will not be able to make the new
              date.
            </Typography>
          </Box>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={classes.paddedView}
            color="secondary"
          >
            Journal of Neuroendocrinology has become the Official Journal of
            IRPS
          </Typography>
          <Box className={classes.paddedView}>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.paddedView}
            >
              We are very pleased to announce that the IRPS Council (2018-2020)
              has approved unanimously the co-proposal made by the IRPS
              Presidents and the EIC of JOURNAL OF NEUROENDOCRINOLOGY (JNE) that
              JNE becomes the Official Journal of the IRPS, and as such will
              publish the proceedings of the Biennial RegPep World Congress (the
              proceedings of RegPep2016 and RegPep2020 have been published in
              Frontiers in Neuroendocrine Sciences and Annals of New York
              Academy of Science).
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.paddedView}
            >
              For RegPep2020, the proceedings is planned to comprise two Special
              Issues, so that we are accepting submissions beginning now (option
              in the Special Issue drop down box on the JNE submissions site)
              for any manuscripts describing work to be presented at RegPep2020,
              and will continue to accept manuscripts up until two months
              following RegPep2020.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.paddedView}
            >
              We take a moment here to share our Council’s articulation of the
              role of a Society journal in the mission of the IRPS: “We
              anticipate that publication of the proceedings of RegPep2020, and
              RegPeps in following years will be avidly supported by IRPS
              membership through i) fair, impartial and rigorous review of
              proceedings when members are called upon as reviewers, ii)
              featuring of proceedings articles on our website, written by
              members who, without conflicts of interest, truly feel that the
              article featured merits to the attention of the Society membership
              at large, and iii) support of members’ work and contributions to
              the literature by frank and constructive criticism and suggestions
              during RegPep itself, and hopefully during periods between
              meetings, by the relationships of scholarship and collegiality
              built up during the biennial RegPep meeting.
            </Typography>
          </Box>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={classes.paddedView}
            color="secondary"
          >
            Viktor Mutt Lectureship for RegPep2020 awardee announcement
          </Typography>
          <Box className={classes.paddedView}>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.paddedView}
            >
              We also continue the tradition of the Mutt Lectureship and are
              quite proud to announce Diego Bohorquez of Duke University School
              of Medicine as the 2020 Mutt Lecturer.
            </Typography>
          </Box>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className={classes.paddedView}
            color="secondary"
          >
            Become an IRPS council member / officer to better serve our
            international community
          </Typography>
          <Box className={classes.paddedView}>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.paddedView}
            >
              On September 25th 2018, the IRPS General Assembly resolved that
              the democratically elected Steering Committee should lead the
              legal incorporation of the Society as a rule-driven nonprofit
              International Scientific Society that organizes the Biennial
              RegPep World Conference, on a non- profit basis, and other
              activities according to the Aims of the IRPS.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.paddedView}
            >
              The incorporated Statutes state that the IRPS Council (currently
              comprising the Steering Committee members elected in 2018) should
              be elected every two years and are themselves chosen by
              self-nomination and election at RegPep General Assembly, for a
              four-year term. This year, the Council will be elected in toto.
              Nominations are warmly welcomed (detailed instructions to follow).
              We anticipate that elections will yield a mix of experienced,
              seasoned individuals to carry out the work of Council from
              2020-2022, and some new members who will bring fresh energy and
              creativity to the IRPS.
            </Typography>
          </Box>
          <Box className={classes.centeredView}>
            <Box className={classes.paddedView}>
              <Typography variant="body1">
                With best wishes and best regards to all,
              </Typography>
            </Box>
            <Box className={classes.paddedView}>
              <Typography variant="body1" className={classes.coloredText}>
                Ruud Buijs
              </Typography>
              <Typography variant="body1">President-elect of IRPS</Typography>
              <Typography variant="body1">Chair, RegPep2020</Typography>
            </Box>
            <Box className={classes.paddedView}>
              <Typography variant="body1" className={classes.coloredText}>
                Lee Eiden and Limei Zhang
              </Typography>
              <Typography variant="body1">Co-Presidents of IRPS</Typography>
            </Box>
            <Box className={classes.paddedView}>
              <Typography variant="body2" color="secondary">
                International Regulatory Peptide Society (IRPS)
              </Typography>
              <Typography variant="body2" color="secondary">
                Email: secretariat@irps-regpep.org
              </Typography>
              <Typography variant="body2" color="secondary">
                URL: regpep.org
              </Typography>
            </Box>
            <Box className={classes.paddedView}>
              <Typography variant="body2" color="secondary">
                23rd International Symposium on Regulatory Peptides (RegPep2020)
              </Typography>
              <Typography variant="body2" color="secondary">
                Email: regpep2020@unam.mx
              </Typography>
              <Typography variant="body2" color="secondary">
                URL: regpep2020.unam.mx
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </BaseView>
  );
}
