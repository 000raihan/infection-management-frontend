import '../App.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Card, Container, Box } from '@mui/material';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
// sections
import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function ProductsPage({ sx, ...other }) {
  const [openOne, setOpenOne] = useState(true);
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

   // -------------- chart js--------
const options1 = {
  responsive: true,
  animated:true,
  plugins: {
    legend: {
      position: 'top',
      display:false
    },
    title: {
      display: true,
      text: 'Not Indicated in VAP',
      font:{
        size:20
      }
    },
  },
};
const options2 = {
  responsive: true,
  animated:true,
  plugins: {
    legend: {
      position: 'top',
      display:false
    },
    title: {
      display: true,
      text: 'NDM Coverage Required ',
      font:{
        size:20
      }
    },
  },
};
const options3 = {
  responsive: true,
  animated:true,
  plugins: {
    legend: {
      position: 'top',
      display:false
    },
    title: {
      display: true,
      text:'SUPERB CHOICE',
      font:{
        size:20
      }
    },
  },
};


const labels = [''];

const data1 = {
  labels,
  datasets: [
    {
      label: '',
      data:[70,100],
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#FF0000',
    }
  ],
};
const data2 = {
  labels,
  datasets: [
    {
      label: '',
      data:[40,100],
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#FF0000',
    }
  ],
};
const data3 = {
  labels,
  datasets: [
    {
      label: '',
      data:[90,100],
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: '#FFC000',
    }
  ],
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
              // onClick={handleTwo}
              title="Diagnosis & Causative Pathogen"
              color={openTwo ? 'warning' : 'primary'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              // onClick={handleThree}
              title="Antibiogram Report"
              color={openThree ? 'warning' : 'primary'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              // onClick={handleFour}
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* <button
                        className="button-previous"
                        style={{ fontWeight: '600', fontSize: '1.5rem' }}
                        onClick={handl}
                      >
                        Previous
                      </button> */}
                    <button
                      className="button-next"
                      style={{ fontWeight: '600', fontSize: '1.5rem' }}
                      onClick={handleTwo}
                    >
                      Next
                    </button>
                  </Box>
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                      className="button-previous"
                      style={{ fontWeight: '600', fontSize: '1.5rem' }}
                      onClick={handleOne}
                    >
                      Previous
                    </button>
                    <button
                      className="button-next"
                      style={{ fontWeight: '600', fontSize: '1.5rem' }}
                      onClick={handleThree}
                    >
                      Next
                    </button>
                  </Box>
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                      className="button-previous"
                      style={{ fontWeight: '600', fontSize: '1.5rem' }}
                      onClick={handleTwo}
                    >
                      Previous
                    </button>
                    <button
                      className="button-next"
                      style={{ fontWeight: '600', fontSize: '1.5rem' }}
                      onClick={handleFour}
                    >
                      Next
                    </button>
                  </Box>
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
                  <div>
                    <div className="box-flex">
                      <ul className="box-list">
                        <li
                          style={{
                            color: changeContent === 1 ? 'white' : '#000',
                            fontWeight: '600',
                            fontSize: '1.5rem',
                            backgroundColor: changeContent === 1 ? '#2065D1' : 'white',
                            listStyle: 'none',
                            minWidth: '300px',
                            maxWidth: '300px',
                            textAlign: 'center',
                            marginBottom: '.5rem',
                            padding: '.3rem .5rem',
                            border: '1px solid #2065D1',
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
                            color: changeContent === 2 ? 'white' : '#000',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            minWidth: '300px',
                            maxWidth: '300px',
                            backgroundColor: changeContent === 2 ? '#2065D1' : 'white',
                            listStyle: 'none',
                            textAlign: 'center',
                            marginBottom: '.5rem',
                            padding: '.3rem .5rem',
                            border: '1px solid #2065D1',
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
                            color: changeContent === 3 ? 'white' : '#000',
                            fontWeight: '600',
                            fontSize: '1.5rem',
                            backgroundColor: changeContent === 3 ? '#2065D1' : 'white',
                            listStyle: 'none',
                            minWidth: '300px',
                            maxWidth: '300px',
                            textAlign: 'center',
                            marginBottom: '.5rem',
                            padding: '.3rem .5rem',
                            border: '1px solid #2065D1',
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
                        <Bar style={{ height: '500px', width: '700px' }} options={options1} data={data1} />
                      )}
                      {changeContent === 2 && (
                        <Bar style={{ height: '500px', width: '700px' }} options={options2} data={data2} />
                      )}
                      {changeContent === 3 && (
                        <Bar style={{ height: '500px', width: '700px' }} options={options3} data={data3} />
                      )}
                    </div>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <button
                        className="button-previous"
                        style={{ fontWeight: '600', fontSize: '1.5rem' }}
                        onClick={handleThree}
                      >
                        Previous
                      </button>
                      <button
                        className="button-next"
                        style={{ fontWeight: '600', fontSize: '1.5rem' }}
                        onClick={handleOne}
                      >
                        Reset
                      </button>
                    </Box>
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
