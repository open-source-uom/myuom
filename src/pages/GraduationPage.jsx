/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

import { Box, Heading, useToast } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDepName } from '@/hooks/useDepName'
import { useGraduationLink } from '@/hooks/useGraduationLink'
import i18n from '../i18n'

export default function GraduationPage() {
    const { depCode } = useDepName()
    const toast = useToast()
    const navigate = useNavigate()
    const gradLink = useGraduationLink(depCode)
    const hasOpenedLinkRef = useRef(false)

    useEffect(() => {
        if (!depCode) {
            toast({
                title: i18n.t('error_title'),
                description: i18n.t('error_description'),
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom',
            })
        }
        if (gradLink) {
            window.open(gradLink.link)
            navigate('/')
            hasOpenedLinkRef.current = true
        }
    }, [depCode, gradLink, navigate, toast])

    return (
        <Box>
            {gradLink ? (
                <Heading textAlign="center" marginTop="50px">
                    {i18n.t('graduation_redirection_message')}
                    <a href={gradLink.link} target="_blank" rel="noreferrer">
                        {gradLink.code}
                    </a>
                </Heading>
            ) : (
                <Heading textAlign="center" marginTop="50px">
                    {i18n.t('graduation_description')}
                </Heading>
            )}
        </Box>
    )
}
