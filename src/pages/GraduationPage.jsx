import React, { useContext, useEffect } from 'react'
import { DepartmentContext } from '../contexts/departmentContext'
import { GradData } from '../assets/Graduation'
import { Heading } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
export default function GraduationPage() {

  const { depName } = useContext(DepartmentContext)
  const toast = useToast()

  useEffect(() => {
    console.log(GradData.get(depName));
  }, [depName])


  const showToast = () => {
    toast({
      title: 'Department Not Selected',
      description: "Please Select a Department From The Settings",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position:'top-right'
    })
  }

  //<Text align={'center'}> SELECT DEPARTMENT</Text>
  return (
    <>
      {
        GradData.get(depName) ? <Heading textAlign="center" marginTop="50px">
          Redirecting to <a href={GradData.get(depName)} target={'_blank'} rel="noreferrer">{GradData.get(depName)}</a>
          {window.open(GradData.get(depName))}
        </Heading> : showToast()
      }
    </>

  )
}

