'use client'
import React from 'react';
import TopBar from '../components/LandingPage/TopBar';
import EmployeePortal from '../components/Employee/Employee';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { jwtDecode } from 'jwt-decode';

export default function Home() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const userDataCookie = cookies.userData;
    if (userDataCookie) {
      const userData = JSON.parse(decodeURIComponent(userDataCookie));
      const tokenPayload: { roles?: string[] } = jwtDecode(userData.token);
      const roles = tokenPayload.roles && tokenPayload.roles.length > 0 ? tokenPayload.roles[0] : null;
      setUserRole(roles);
    }
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between " style={{ backgroundColor: '#EFF2F6' }}>
      <TopBar/>
      {userRole === 'EMPLOYEE' || userRole === 'ADMIN' ? (
        <EmployeePortal/>
      ) : (
        <div className="text-center text-red-600 font-bold">ACCESS DENIED</div>
      )}
    </main>
  );
}
