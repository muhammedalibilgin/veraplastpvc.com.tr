'use client';

const SpecialCodeBlock = ({ data }) => {
    if (!data?.code) return null;
    
    return (
        <div 
            className="special-code-block"
            dangerouslySetInnerHTML={{ __html: data.code }}
        />
    );
};

export default SpecialCodeBlock;
