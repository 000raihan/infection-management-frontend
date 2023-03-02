import '../App.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Card, Container } from '@mui/material';
// sections
import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage({ sx, ...other }) {
  const [openOne, setOpenOne] = useState(false);
  const handleOne = () => {
    setOpenOne(true);
    setOpenTwo(false);
    setOpenThree(false);
  };

  const [openTwo, setOpenTwo] = useState(false);
  const handleTwo = () => {
    setOpenOne(false);
    setOpenTwo(true);
    setOpenThree(false);
  };

  const [openThree, setOpenThree] = useState(false);
  const handleThree = () => {
    setOpenOne(false);
    setOpenTwo(false);
    setOpenThree(true);
  };

  const [changePage, setChangePage] = useState(true);
  const handlePage = () => {
    setChangePage(!changePage);
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
        <title> Case 01 - Infection Management Board </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary onClick={handleOne} title="Patient History" color={openOne ? 'warning' : 'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary onClick={handleTwo} title="Diagnosis" color={openTwo ? 'warning' : 'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              onClick={handleThree}
              title="Effective Anti-Infective"
              color={openThree ? 'warning' : 'primary'}
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
                  {changePage ? (
                    <>
                      <p>
                        A 50 year old lady with ileal perforation was admitted in ICU. She was semi-conscious, vitals
                        unstable. She was in respiratory failure with PaO2/FiO2 ratio &lt;200. She was intubated,
                        central venous catheter was inserted & total parenteral nutrition started immediately after
                        admission.
                      </p>
                      <p>
                        <strong>Ongoing Antibiotic:</strong> piperacillin & tazobactam combination.
                      </p>
                      <p>
                        <strong>History:</strong> Diabetic and hypertensive for 9 years.
                      </p>
                      <hr />
                      <button className="button-next" onClick={handlePage} onKeyDown={handlePage}>
                        Next
                      </button>
                    </>
                  ) : (
                    <>
                      <ul>
                        <li>Third day post-surgery she had fever (102C)</li>
                        <li>Antibiotic is changed to Meropenem and Fluconazole is added</li>
                        <li>
                          <strong>Fifth day post-surgery:</strong> Fever persisting
                        </li>
                      </ul>

                      <hr />
                      <button className="button-previous" onClick={handlePage} onKeyDown={handlePage}>
                        Previous
                      </button>
                    </>
                  )}
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
                  <p>
                    <strong>Suspected Diagnosis:</strong> Invasive Candidiasis
                  </p>
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
                          Anidulafungin
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
                          Fluconazole
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
                          Voriconazole
                        </div>
                      </li>
                    </ul>

                    {changeContent === 1 && (
                      <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'yellow' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>First Line Choice & Highest Efficacy</p>
                        </div>
                      </div>
                    )}
                    {changeContent === 2 && (
                      <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'red', height: '300px' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>Azole Resistance & Efficacy is Lower</p>
                        </div>
                      </div>
                    )}
                    {changeContent === 3 && (
                      <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'red', height: '350px' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>Not Good Choice for IC & Azole Resistance Concern</p>
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
