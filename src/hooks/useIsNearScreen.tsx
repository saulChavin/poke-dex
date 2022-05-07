import { useEffect, useState, useRef } from 'react'

interface Props {
    distance: string;
    externalRef: React.RefObject<HTMLInputElement>;
    once: boolean;
}

export default function useNearScreen({ distance = '100px', externalRef, once = true }: Props) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(() => {
        let observer: IntersectionObserver;

        const element = externalRef ? externalRef.current : fromRef.current

        const onChange:IntersectionObserverCallback = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })

            if (element) observer.observe(element)
        })

        return () => observer && observer.disconnect()
    })

    return { isNearScreen, fromRef }
}