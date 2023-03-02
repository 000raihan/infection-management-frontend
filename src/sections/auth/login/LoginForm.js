import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import axios from "axios";

// components
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)

  const [showPassword, setShowPassword] = useState(false);

  const handleClick =async () => {
    if(!name){
      return
    }
   const res =  await axios.post("/api/user_info", {
      name,
      email
    });

    if(res){
      const {name, email, id} = res.data.result;
      const userInfo = res.data.result
       await localStorage.setItem("userProfile", JSON.stringify(userInfo))
      navigate('/dashboard', { replace: true });
    }

  };

  return (
    <>
      <Stack spacing={3}>
        <TextField value={name} onChange={e=>setName(e.target.value)} name="name" label="Full Name" />
        <TextField value={email} onChange={e=>setEmail(e.target.value)} name="email" label="Email address" />

        {/* <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}
      </Stack>

      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

      <LoadingButton fullWidth size="large" type="submit" variant="contained" sx={{marginTop:"1rem"}} onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );
}
