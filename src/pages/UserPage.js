import '../App.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Card, Container, Box } from '@mui/material';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";
import {faker} from '@faker-js/faker';

// sections
import { AppWebsiteVisits, AppWidgetSummary } from '../sections/@dashboard/app';



// ----------------------------------------------------------------------

export default function UserPage({ sx, ...other }) {
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
      text: 'OOPS! High Chance of Nephrotoxicity',
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
      text: 'Not a Suitable Option',
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
      text: 'Best Choice',
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
        <title> Case 02 - Infection Management Board </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary  title="Patient History" color={openOne ? 'warning' : 'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary  title="Causative Pathogen" color={openTwo ? 'warning' : 'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Resistant Profile"
              color={openThree ? 'warning' : 'primary'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
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

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      {/* <button
                        className="button-previous"
                        style={{ fontWeight: '600', fontSize: '1.5rem' }}
                        onClick={handleOne}
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
                          backgroundColor: changeContent === 1 ? '#2065D1' : 'white',
                          listStyle:"none",
                          minWidth:"270px",
                          maxWidth:"max-content",
                          textAlign:"center",
                          marginBottom:".5rem",
                          padding:".3rem .5rem",
                          border:"1px solid #2065D1"
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
                      <Box
                        style={{
                          color: changeContent === 2 ? 'white' : '#000',
                          fontWeight: '600',
                          backgroundColor: changeContent === 2 ? '#2065D1' : 'white',
                          listStyle:"none",
                          minWidth:"270px",
                          maxWidth:"max-content",
                          textAlign:"center",
                          marginBottom:".5rem",
                          padding:".3rem .5rem",
                          border:"1px solid #2065D1"
                          
                        }}
                        onClick={handleContent}
                        onKeyDown={handleContent}
                      >
                        <div
                          id="2"
                          className="list"

                          role="button"
                          tabIndex={0}
                        >
                          Meropenem
                        </div>
                      </Box>
                      <div
                       style={{
                        color: changeContent === 3 ? 'white' : '#000',
                        fontWeight: '600',
                        backgroundColor: changeContent === 3 ? '#2065D1' : 'white',
                        listStyle:"none",
                        minWidth:"270px",
                        maxWidth:"max-content",
                        textAlign:"center",
                        marginBottom:".5rem",
                        padding:".3rem .5rem",
                        border:"1px solid #2065D1"
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
                      </div>
                    </ul>
                    {changeContent === 1 && (
                       <Bar style={{height:"500px", width:"700px"}} options={options1} data={data1} />
                    )}
                    {changeContent === 2 && (
                       <Bar style={{height:"500px", width:"700px"}} options={options2} data={data2} />
                    )}
                    {changeContent === 3 && (
                       <Bar style={{height:"500px", width:"700px"}} options={options3} data={data3} />
                    )}
                  </div>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="button-previous" style={{fontWeight:"600", fontSize:"1.5rem"}} onClick={handleThree} >
                      Previous
                    </button>
                    <button className="button-next" style={{fontWeight:"600", fontSize:"1.5rem"}} onClick={handleOne}>
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
