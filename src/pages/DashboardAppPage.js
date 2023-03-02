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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function DashboardAppPage({ sx, ...other }) {
  const [openOne, setOpenOne] = useState(true);
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
      text: 'First Line Choice & Highest Efficacy',
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
      text: 'Azole Resistance & Efficacy is Lower',
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
      text: 'Not Good Choice for IC & Azole Resistance Concern',
      font:{
        size:20
      }
    },
  },
};


const labels = [''];

const data = {
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
const data2 = {
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
const data3 = {
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

  return (
    <>
      <Helmet>
        <title> Case 01 - Infection Management Board </title>
      </Helmet>

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Patient History" color={openOne ? 'warning' : 'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary  title="Diagnosis" color={openTwo ? 'warning' : 'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
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
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="button-previous" style={{fontWeight:"600", fontSize:"1.5rem"}}  onClick={handlePage} onKeyDown={handlePage}>
                          Previous
                        </button>
                        <button className="button-next" style={{fontWeight:"600", fontSize:"1.5rem"}}  onClick={handleTwo} onKeyDown={handlePage}>
                          Next
                        </button>
                      </Box>
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
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="button-previous" style={{fontWeight:"600", fontSize:"1.5rem"}}  onClick={handlePage} onKeyDown={handlePage}>
                      Previous
                    </button>
                    <button className="button-next" style={{fontWeight:"600", fontSize:"1.5rem"}}  onClick={handleThree} onKeyDown={handlePage}>
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
                          style={{width:"100%", height:"100%"}}
                        >
                          Anidulafungin
                        </div>
                      </li>
                      <li
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
                        Voriconazole
                        </div>
                      </li>
                    </ul>

                    {changeContent === 1 && (
                      <>
                       <Bar style={{height:"500px", width:"700px"}} options={options1} data={data} />
                      {/* <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'yellow' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>First Line Choice & Highest Efficacy</p>
                        </div>
                      </div> */}
                      </>
                    )}
                    {changeContent === 2 && (
                      <>
                      <Bar style={{height:"500px", width:"700px"}} options={options2} data={data2} />
                      {/* <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'red', height: '300px' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>Azole Resistance & Efficacy is Lower</p>
                        </div>
                      </div> */}
                      </>
                    )}
                    {changeContent === 3 && (
                      <div> 
                       
                       <Bar 
                     
                       style={{height:"500px", width:"700px"}} options={options3} data={data3} />

                      {/* <div className="box-flex-inside">
                        <div className="box-item" style={{ backgroundColor: 'red', height: '350px' }}>
                          &nbsp;
                        </div>
                        <div className="box-text">
                          <p>Not Good Choice for IC & Azole Resistance Concern</p>
                        </div>
                      </div> */}
                      </div>
                    )}

                    
                  </div>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="button-previous" style={{fontWeight:"600", fontSize:"1.5rem"}} onClick={handleTwo} onKeyDown={handlePage}>
                      Previous
                    </button>
                    <button className="button-next" style={{fontWeight:"600", fontSize:"1.5rem"}} onClick={handleOne} onKeyDown={handlePage}>
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
