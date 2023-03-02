import '../App.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Card, Container } from '@mui/material';
// sections
import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function UserPage({ sx, ...other }) {
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
        <title> Case 02 - Infection Management Board </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary onClick={handleOne} title="Patient History" color={openOne ? 'warning' : 'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary onClick={handleTwo} title="Causative Pathogen" color={openTwo ? 'warning' : 'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              onClick={handleThree}
              title="Resistant Profile"
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
                  <>
                    <p>
                      A 62 year old male admitted is admitted to the hospital due to excruciating abdominal pain,
                      distension, nausea, and vomiting for the past three days.
                    </p>
                    <p>
                      <strong>Patient’s medical history and current examination:</strong>
                    </p>
                    <ul>
                      <li>End-stage liver disease (ESLD), secondary to chronic alcoholism</li>
                      <li>Renal failure</li>
                      <li>Distended abdomen</li>
                    </ul>
                    <p>
                      <strong>Antibiotics:</strong> Meropenem & Antifungal: Voriconazole added.
                    </p>
                    <p>Patient is transferred to ICU with high CRP value.</p>
                  </>
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
                  <ul>
                    <li>Local epidemiology of ICU, causative Pathogen may be Acinatobacter Baumannii</li>
                    <li>Resistant profile ensures that Acinatobacter is Carbapenem resistant</li>
                    <li>MDR Pathogens</li>
                  </ul>
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
                  <table>
                    <thead>
                      <tr>
                        <th>Ampicillin</th>
                        <th>R</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ceftriaxone</td>
                        <td>R</td>
                      </tr>
                      <tr>
                        <td>Amox/Clav</td>
                        <td>R</td>
                      </tr>
                      <tr>
                        <td>PIP/TAZO</td>
                        <td>R</td>
                      </tr>
                      <tr>
                        <td>Meropenem</td>
                        <td>R</td>
                      </tr>
                      <tr>
                        <td>Colistin</td>
                        <td>S</td>
                      </tr>
                      <tr>
                        <td>Gentamicin</td>
                        <td>S</td>
                      </tr>
                      <tr>
                        <td>Ceftazidime</td>
                        <td>I</td>
                      </tr>
                      <tr>
                        <td>Tigecycline</td>
                        <td>S</td>
                      </tr>
                    </tbody>
                  </table>
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
                          Colisitin
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
                          Meropenem
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
                          Tigecycline
                        </div>
                      </li>
                    </ul>
                    {changeContent === 1 && (
                      <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'yellow' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>OOPS! High Chance of Nephrotoxicity</p>
                        </div>
                      </div>
                    )}
                    {changeContent === 2 && (
                      <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'red', height: '300px' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>Not a Suitable Option</p>
                        </div>
                      </div>
                    )}
                    {changeContent === 3 && (
                      <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'red', height: '350px' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>Best Choice</p>
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
