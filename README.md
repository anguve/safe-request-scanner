# safe-request-scanner

## Descripción

`safe-request-scanner` es una librería diseñada para escanear solicitudes HTTP en busca de posibles vulnerabilidades de seguridad. Esta herramienta es capaz de detectar inyecciones SQL, XSS, inyecciones de comandos, LDAP, XPath e inclusiones de archivos.

## Características

- **Escaneo de URL**: Verifica la URL de la solicitud en busca de patrones sospechosos.
- **Escaneo de Cuerpo**: Analiza el cuerpo de la solicitud, tanto las claves como los valores.
- **Escaneo de Encabezados**: Revisa los encabezados HTTP para detectar posibles problemas.
- **Escaneo de FormData**: Escanea los datos del formulario enviados en la solicitud.
- **Escaneo de Cookies**: Analiza las cookies de la solicitud en busca de posibles vulnerabilidades.
- **Detectores de Seguridad**: Utiliza múltiples detectores para identificar inyecciones SQL, XSS, inyecciones de comandos, LDAP, XPath e inclusiones de archivos.

## Instalación

Para instalar y utilizar esta librería, sigue estos pasos:

```sh
npm install safe-request-scanner
```

# Uso

## A continuación se muestra un ejemplo de cómo utilizar la función scanRequest para escanear una solicitud HTTP:

`

    import { scanRequest } from 'safe-request-scanner';

    const url = 'http://example.com?param1=value1&param2=value2';
    const body = {
        username: 'john_doe',
        password: 'securePassword123',
        email: 'john.doe@example.com',
    };
    const headers = {
        'User-Agent': 'Mozilla/5.0',
        'Content-Type': 'application/json',
    };
    const formData = new FormData();
    formData.append('firstName', 'John');
    formData.append('lastName', 'Doe');
    const cookies = {
        sessionId: 'abcd1234',
    };

    const scanOptions = {
        checkUrl: {
            keys: false,
            values: true,
            detectSentences: true,
            detectReservedWords: true,
        },
        checkBody: {
            keys: true,
            values: true,
            detectSentences: true,
            detectReservedWords: true,
        },
        checkHeaders: {
            keys: true,
            values: true,
            detectSentences: true,
            detectReservedWords: true,
        },
        checkFormData: {
            keys: true,
            values: true,
            detectSentences: true,
            detectReservedWords: true,
        },
        checkCookies: {
            keys: true,
            values: true,
            detectSentences: true,
            detectReservedWords: true,
        },
    };

    const issues = scanRequest({
        url,
        body,
        headers,
        formData,
        cookies,
        options: scanOptions,
    });

    if (issues.length > 0) {
        console.log('Potential security issues detected:');
        issues.forEach((issue) => console.log(issue));
    } else {
        console.log('No issues detected.');
    }

`

# Detalles de Implementación

## Función scanRequest

Esta función es el punto de entrada principal para el escaneo de solicitudes. Toma los parámetros de la solicitud y las opciones de escaneo y devuelve una lista de problemas de seguridad detectados.

Parámetros

### url: La URL de la solicitud.

### body: El cuerpo de la solicitud.

### headers: Los encabezados de la solicitud.

### formData: Los datos del formulario de la solicitud.

### cookies: Las cookies de la solicitud.

### options: Opciones de escaneo personalizadas.

# Retorno

## Devuelve un array de cadenas que representan los problemas de seguridad encontrados.

## Funciones de Escaneo Específicas

### scanUrl(url, options): Escanea la URL.

### scanBody(body, options): Escanea el cuerpo de la solicitud.

### scanHeaders(headers, options): Escanea los encabezados de la solicitud.

### scanFormData(formData, options): Escanea los datos del formulario.

### scanCookies(cookies, options): Escanea las cookies.

### Detectores de Seguridad

### detectSQLInjection(input): Detecta inyecciones SQL.

### isSQLSentence(input): Verifica si una cadena contiene una sentencia SQL.

### detectXSS(input): Detecta XSS (Cross-Site Scripting).

### detectCommandInjection(input): Detecta inyecciones de comandos.

### detectLDAPInjection(input): Detecta inyecciones LDAP.

### detectXPathInjection(input): Detecta inyecciones XPath.

### detectFileInclusion(input): Detecta inclusiones de archivos.

# Configuración de Proyecto

`

    {
        "name": "safe-request-scanner",
        "version": "0.3.8-alpha",
        "main": "dist/index.js",
        "types": "dist/index.d.ts",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "tsc",
            "start": "ts-node src/index.ts"
            },
        "devDependencies": {
            "@types/node": "^20.14.7",
            "typescript": "^5.5.2",
            "ts-node": "^10.4.0"
            },
        "keywords": [
            "security",
            "sql injection",
            "xss",
            "input validation"
            ],
        "author": "Andres Gutierrez",
        "license": "MIT"
    }

`

# Contribuciones

## Las contribuciones son bienvenidas. Para contribuir, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza los cambios necesarios y haz commit (git commit -m 'Agregar nueva característica').
Haz push a la rama (git push origin feature/nueva-caracteristica).
Abre un Pull Request.
Contacto
Para cualquier consulta, puedes contactar a:

https://github.com/anguve/safe-request-scanner

Andres Gutierrez.

Correo: sr.willardkraft@gmail.com

Gracias por utilizar safe-request-scanner
