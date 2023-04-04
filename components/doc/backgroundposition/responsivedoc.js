import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = {
        basic: `<div>
    <div class="bg-top md:bg-bottom bg-no-repeat" style="background-image: url('images/product-placeholder-yellow.svg');background-size: 5rem"></div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container yellow-container overflow-hidden flex align-items-center justify-content-center">
        <div class="bg-top md:bg-bottom bg-no-repeat w-10rem h-10rem bg-yellow-500 border-round m-3" style="background-image: url('images/product-placeholder-yellow.svg');background-size: 5rem"></div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:bg-bottom</i> to use a responsive class.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>sm:</td>
                                <td>small screens e.g. phones</td>
                            </tr>
                            <tr>
                                <td>md:</td>
                                <td>medium screens e.g. tablets</td>
                            </tr>
                            <tr>
                                <td>lg:</td>
                                <td>large screens e.g. notebooks</td>
                            </tr>
                            <tr>
                                <td>xl:</td>
                                <td>larger screens e.g monitors</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
            <div class="card">
                <div class="card-container yellow-container overflow-hidden flex align-items-center justify-content-center">
                    <div class="bg-top md:bg-bottom bg-no-repeat w-10rem h-10rem bg-yellow-500 border-round m-3" style={{ backgroundImage: "url('/images/product-placeholder-yellow.svg')",backgroundSize:'5rem' }}></div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}