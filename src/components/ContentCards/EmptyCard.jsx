import React from 'react';
import ContentLoader from "react-content-loader";

const EmptyCard = () => {
    return (
        Array(8).fill(null).map((item, index) => {
            return (
                <div key={index}>
                    <ContentLoader
                        speed={2}
                        width={210}
                        height={260}
                        viewBox="0 0 210 260"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                        <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
                        <rect x="0" y="127" rx="3" ry="3" width="93" height="15" />
                        <rect x="0" y="173" rx="8" ry="8" width="80" height="24" />
                        <rect x="116" y="167" rx="8" ry="8" width="32" height="32" />
                    </ContentLoader>
                </div>
            )
        })
    )
}

export default EmptyCard