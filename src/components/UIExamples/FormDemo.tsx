import {atom, useAtom} from "jotai";
import {useEffect} from "react";
import toast from "react-hot-toast";

interface Form {
    rememberMe: boolean;
    imageUpload?: File;
    imageUrl?: string;
    radioButtonValue: string;
    sliderValue: number;
    dropdownValue: string;
    textInputValue?: string;
    dateInputValue?: string;
}

const FormAtom = atom<Form>({
    rememberMe: false,
    imageUpload: undefined,
    imageUrl: '',
    radioButtonValue: '',
    sliderValue: 40,
    dropdownValue: '',
    textInputValue: '',
    dateInputValue: new Date().toLocaleDateString()
})

export default function FormDemo() {

    const [form, setForm] = useAtom(FormAtom);

    return <>

        <div className="w-64">
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Remember me</span>
                    <input type="checkbox" onChange={() => setForm({...form, rememberMe: !form.rememberMe})}
                           checked={form.rememberMe} className="checkbox"/>
                </label>
            </div>

            <input
                type="file"
                accept="image/*"
                onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) {
                        const imageUrl = URL.createObjectURL(file);
                        setForm({...form, imageUpload: file, imageUrl: imageUrl});
                    }
                }}
                className="file-input file-input-bordered w-full max-w-xs"
            />

            <label className="label cursor-pointer">
                <span className="label-text">first</span>
                <input type="radio" onChange={e => setForm({
                    ...form,
                    radioButtonValue: e.target.value
                })} value="first" className="radio" checked={form.radioButtonValue === "first"}/>
            </label>


            <label className="label cursor-pointer">
                <span className="label-text">second</span>
                <input type="radio" onChange={e => setForm({...form, radioButtonValue: e.target.value})} value="second"
                       className="radio" checked={form.radioButtonValue === "second"}/>
            </label>


            <input type="range" min="0" max="100" value={form.sliderValue}
                   onChange={e => setForm({...form, sliderValue: Number(e.target.value)})} className="range"/>

            <select onChange={e => setForm({...form, dropdownValue: e.target.value})} value={form.dropdownValue}
                    className="select select-bordered w-full max-w-xs">
                <option disabled selected>Who shot first?</option>
                <option value="Han Solo">Han Solo</option>
                <option value="Greedo">Greedo</option>
            </select>

            <input value={form.textInputValue} onChange={e => setForm({...form,  textInputValue: e.target.value})} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>

            <input type="datetime-local" value={form.dateInputValue} onChange={e => setForm({...form, dateInputValue: e.target.value})} />

            {form.imageUrl && (
                <img
                    src={form.imageUrl}
                    alt="Uploaded image"
                    className="mt-4 max-w-xs"
                />
            )}
        </div>

        <div>
            The form state is: {JSON.stringify(form)}
        </div>

    </>
}