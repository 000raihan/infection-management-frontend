import '../App.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Card, Container } from '@mui/material';
// sections
import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function ProductsPage({ sx, ...other }) {
  const [openOne, setOpenOne] = useState(false);
  const handleOne = () => {
    setOpenOne(true);
    setOpenTwo(false);
    setOpenThree(false);
    setOpenFour(false);
  };

  const [openTwo, setOpenTwo] = useState(false);
  const handleTwo = () => {
    setOpenOne(false);
    setOpenTwo(true);
    setOpenThree(false);
    setOpenFour(false);
  };

  const [openThree, setOpenThree] = useState(false);
  const handleThree = () => {
    setOpenOne(false);
    setOpenTwo(false);
    setOpenThree(true);
    setOpenFour(false);
  };
  const [openFour, setOpenFour] = useState(false);
  const handleFour = () => {
    setOpenOne(false);
    setOpenTwo(false);
    setOpenThree(false);
    setOpenFour(true);
  };

  const [changeContent, setChangeContent] = useState(0);
  const handleContent = (e) => {
    return e.target.id === '1'
      ? setChangeContent(1)
      : e.target.id === '2'
      ? setChangeContent(2)
      : e.target.id === '3'
      ? setChangeContent(3)
      : 0;
  };

  return (
    <>
      <Helmet>
        <title> Case 03 - Infection Management Board </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary onClick={handleOne} title="Patient History" color={openOne ? 'warning' : 'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              onClick={handleTwo}
              title="Diagnosis & Causative Pathogen"
              color={openTwo ? 'warning' : 'primary'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              onClick={handleThree}
              title="Antibiogram Report"
              color={openThree ? 'warning' : 'primary'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              onClick={handleFour}
              title="Effective Anti-Infective"
              color={openFour ? 'warning' : 'primary'}
            />
          </Grid>

          {openOne ? (
            <Grid item xs={12} md={12} lg={12}>
              <Card
                sx={{
                  py: 10,
                  px: 10,
                  boxShadow: 0,
                  ...sx,
                }}
                {...other}
              >
                <AppWebsiteVisits>
                  <ul>
                    <li>
                      Patient with history of cholecystectomy admitted for persistent fever. During the course of
                      hospital stay, on day 4, patient developed respiratory symptoms (dyspnea and reduced breath
                      sounds) and was started on treatment for the same.
                    </li>
                    <li>Patient had history of Doripenem for 10 days. Pipercillin and Tazobactam is added.</li>
                    <li>
                      <strong>On day 5:</strong> Patient deteriorates and was put on ventilator. On day 8, patient
                      developed new chest infiltrates on x-ray.
                    </li>
                    <li>
                      <strong>On Day 10:</strong> No improvement. Neutropenic Fever.
                    </li>
                  </ul>
                </AppWebsiteVisits>
              </Card>
            </Grid>
          ) : openTwo ? (
            <Grid item xs={12} md={12} lg={12}>
              <Card
                sx={{
                  py: 10,
                  px: 10,
                  boxShadow: 0,
                  ...sx,
                }}
                {...other}
              >
                <AppWebsiteVisits>
                  <p>Patient is suspected with Carbapanem Resistant Klebsiella VAP.</p>
                </AppWebsiteVisits>
              </Card>
            </Grid>
          ) : openThree ? (
            <Grid item xs={12} md={12} lg={12}>
              <Card
                sx={{
                  py: 10,
                  px: 10,
                  boxShadow: 0,
                  ...sx,
                }}
                {...other}
              >
                <AppWebsiteVisits>
                  <ul>
                    <li>Cefoxitin-R</li>
                    <li>Ceftriaxone-R</li>
                    <li>Cefepime-R</li>
                    <li>Piperacillin Tazobactam-R</li>
                    <li>Aztreonam-R</li>
                    <li>Meropenem-R</li>
                    <li>Colistin-R</li>
                    <li>Fosfomycin-R</li>
                    <li>Tigecycline-S</li>
                    <li>Ceftazidime-Avibactam-R</li>
                  </ul>
                </AppWebsiteVisits>
              </Card>
            </Grid>
          ) : openFour ? (
            <Grid item xs={12} md={12} lg={12}>
              <Card
                sx={{
                  py: 10,
                  px: 10,
                  boxShadow: 0,
                  ...sx,
                }}
                {...other}
              >
                <AppWebsiteVisits>
                  <div className="box-flex">
                    <ul className="box-list">
                      <li
                        style={{
                          color: changeContent === 1 ? '#2065D1' : '#000',
                          fontWeight: changeContent === 1 ? '700' : '400',
                        }}
                      >
                        <div
                          id="1"
                          className="list"
                          onClick={handleContent}
                          onKeyDown={handleContent}
                          role="button"
                          tabIndex={0}
                        >
                          Tigecycline
                        </div>
                      </li>
                      <li
                        style={{
                          color: changeContent === 2 ? '#2065D1' : '#000',
                          fontWeight: changeContent === 2 ? '700' : '400',
                        }}
                      >
                        <div
                          id="2"
                          className="list"
                          onClick={handleContent}
                          onKeyDown={handleContent}
                          role="button"
                          tabIndex={0}
                        >
                          Ceftazidime-Avibactam
                        </div>
                      </li>
                      <li
                        style={{
                          color: changeContent === 3 ? '#2065D1' : '#000',
                          fontWeight: changeContent === 3 ? '700' : '400',
                        }}
                      >
                        <div
                          id="3"
                          className="list"
                          onClick={handleContent}
                          onKeyDown={handleContent}
                          role="button"
                          tabIndex={0}
                        >
                          Ceftazidime-Avibactam + Aztreonam
                        </div>
                      </li>
                    </ul>

                    {changeContent === 1 && (
                      <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'yellow' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>Not Indicated in VAP</p>
                        </div>
                      </div>
                    )}
                    {changeContent === 2 && (
                      <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'red', height: '300px' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>NDM Coverage Required </p>
                        </div>
                      </div>
                    )}
                    {changeContent === 3 && (
                      <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'red', height: '350px' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>Superb choice</p>
                        </div>
                      </div>
                    )}
                  </div>
                </AppWebsiteVisits>
              </Card>
            </Grid>
          ) : (
            false
          )}
        </Grid>
      </Container>
    </>
  );
}
