import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ColumnReverseDoc(props) {
    const code = {
        basic: `<div class="flex flex-column-reverse">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-column-reverse card-container purple-container">
        <div class="flex align-items-center justify-content-center h-4rem bg-purple-500 font-bold text-white border-round m-2">1</div>
        <div class="flex align-items-center justify-content-center h-4rem bg-purple-500 font-bold text-white border-round m-2">2</div>
        <div class="flex align-items-center justify-content-center h-4rem bg-purple-500 font-bold text-white border-round m-2">3</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Items are displayed vertically but in reverse order.</p>
            </DocSectionText>

            <div className="card">
                <div className="flex flex-column-reverse card-container purple-container">
                    <div className="flex align-items-center justify-content-center h-4rem bg-purple-500 font-bold text-white border-round m-2">1</div>
                    <div className="flex align-items-center justify-content-center h-4rem bg-purple-500 font-bold text-white border-round m-2">2</div>
                    <div className="flex align-items-center justify-content-center h-4rem bg-purple-500 font-bold text-white border-round m-2">3</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}